export interface Theme {
    colors: {
        primary: string;
        secondary: string;
        background: string;
        text: string;
    };
    spacing: {
        small: number;
        medium: number;
        large: number;
    };
}


export const theme: Theme = {
    colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        background: '#ffffff',
        text: '#000000',
    },
    spacing: {
        small: 8,
        medium: 16,
        large: 24,
    },
};