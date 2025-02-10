package com.productsapp

import android.Manifest
import android.content.ContentValues
import android.content.Context
import android.content.pm.PackageManager
import android.net.Uri
import android.provider.CalendarContract
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.util.TimeZone

class CalendarModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "CalendarModule"
    }

    @ReactMethod
    fun addEventToCalendar(
        title: String,
        description: String,
        startDate: Double,
        endDate: Double,
        promise: Promise
    ) {
        val context = reactApplicationContext.applicationContext

        if (ContextCompat.checkSelfPermission(context, Manifest.permission.WRITE_CALENDAR) != PackageManager.PERMISSION_GRANTED) {
            promise.reject("PERMISSION_ERROR", "Calendar permission not granted")
            return
        }

        val calendarId = getDefaultCalendarId(context)
        if (calendarId == null) {
            promise.reject("CALENDAR_ERROR", "No calendar found on the device")
            return
        }

        val startTimeMillis = startDate.toLong()
        val endTimeMillis = endDate.toLong()

        // Create a new calendar event
        val values = ContentValues().apply {
            put(CalendarContract.Events.CALENDAR_ID, calendarId)
            put(CalendarContract.Events.TITLE, title)
            put(CalendarContract.Events.DESCRIPTION, description)
            put(CalendarContract.Events.DTSTART, startTimeMillis)
            put(CalendarContract.Events.DTEND, endTimeMillis)
            put(CalendarContract.Events.EVENT_TIMEZONE, TimeZone.getDefault().id)
        }

        try {
            val uri: Uri? = context.contentResolver.insert(CalendarContract.Events.CONTENT_URI, values)
            if (uri != null) {
                promise.resolve("Event added to calendar successfully!")
            } else {
                promise.reject("CALENDAR_ERROR", "Failed to add event to calendar")
            }
        } catch (e: Exception) {
            promise.reject("CALENDAR_ERROR", e.message, e)
        }
    }

    @ReactMethod
    fun requestCalendarPermission(promise: Promise) {
        val activity = currentActivity
        if (activity == null) {
            promise.reject("ACTIVITY_ERROR", "No current activity found")
            return
        }


        // Check if both READ_CALENDAR and WRITE_CALENDAR permissions are granted
        val hasReadPermission = ContextCompat.checkSelfPermission(activity, Manifest.permission.READ_CALENDAR) == PackageManager.PERMISSION_GRANTED
        val hasWritePermission = ContextCompat.checkSelfPermission(activity, Manifest.permission.WRITE_CALENDAR) == PackageManager.PERMISSION_GRANTED

        if (hasReadPermission && hasWritePermission) {
        promise.resolve("Calendar permissions already granted")
        } else {
        val permissionsToRequest = arrayOf(
            Manifest.permission.READ_CALENDAR,
            Manifest.permission.WRITE_CALENDAR
        )
        ActivityCompat.requestPermissions(activity, permissionsToRequest, 100)
        promise.resolve("Calendar permissions requested")
    }
    }


    private fun getDefaultCalendarId(context: Context): Long? {
        val projection = arrayOf(CalendarContract.Calendars._ID)
        val selection = "${CalendarContract.Calendars.IS_PRIMARY} = 1"
        val cursor = context.contentResolver.query(
            CalendarContract.Calendars.CONTENT_URI,
            projection,
            selection,
            null,
            null
        )

        return cursor?.use {
            if (it.moveToFirst()) {
                it.getLong(0)
            } else {
                null
            }
        }
    }
}