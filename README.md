This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

This project was developed as part of the challenge presented by Modak for their selection process. It was built using the following technologies:

- React Native CLI
- React Query
- TypeScript
- Styled Components
- React Navigation


I successfully implemented all the basic features, as well as some of the bonus features (such as deep linking and a native module) for the Android version of the app. For testing purposes, I recommend running the Android version. Please feel free to reach out with any questions, feedback, or suggestions!


# How to run the project (ProductsApp)

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Set node version and install dependencies

First, you will need to run nvm (node version manager) to specify the right node version to run the project (wich is 20).
```sh
# using Yarn
nvm use
``` 
After that you'll need to run:
```sh
# using Yarn
yarn install
``` 



## Step 2: Start Metro

Second, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# using Yarn
yarn start
```

## Step 3: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```
If everything is set up correctly, you should see your new app running in the Android Emulator or your connected device.

This is one way to run your app — you can also build it directly from Android Studio.

#  Examples of implemented features  
## Basic Features
### Fetching products (with Infinite scroll)

https://github.com/user-attachments/assets/090463c6-02a6-47b6-a7d0-7afb674d98c5

### Filter products by category 


https://github.com/user-attachments/assets/136cbee2-2d78-4145-bc4e-9ee54eb1d2ce


### Sort products by Price 


https://github.com/user-attachments/assets/cbd53113-af63-4ed6-a21f-9d228ac1621c


### Sort products by Rating 


https://github.com/user-attachments/assets/be824751-e0b7-47de-9419-d9fed6aeef5f


### Pass data to details screen

https://github.com/user-attachments/assets/40345284-87ea-4383-ba4a-a98c0a2df07f


## Bonus Features

### Schedule a purchase reminder  (Android only)

https://github.com/user-attachments/assets/dc443649-b3dd-474f-9dbc-5e1353163828


### Access especific product filter using deeplink (Android only)


https://github.com/user-attachments/assets/4550ef6a-0c3f-4cf4-8692-5692ce4eb662



OBS: This video was recorded using these commands (in sequence) to trigger the deeplink:
- adb shell am start -W -a android.intent.action.VIEW -d "productsapp://home/forniture" com.productsapp 
- adb shell am start -W -a android.intent.action.VIEW -d "productsapp://home/beauty" com.productsapp 


## Obs
## To test the deeplink:
Use this format of link **adb shell am start -W -a android.intent.action.VIEW -d "productsapp://home/category" com.productsapp**, where "category" is the name of the category that you will use to filter the data when openning the home.

## To test the feature with the Native Module:
After click in "schedule reminder" and confirm a time, look at the default calendar app of your device/emulator.








