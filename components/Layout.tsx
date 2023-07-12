// layout.tsx
import "@/devlink/global.css";
import { DevLinkProvider } from "../devlink";
import "../devlink/global.css";
import React from 'react';

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <DevLinkProvider>
            {children}
        </DevLinkProvider>
        </body>
        </html>
    );
}
