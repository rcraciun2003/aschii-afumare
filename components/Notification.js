'use client';

import React, { useState } from "react";

let globalNotifier;

export function NotificationProvider({ children }) {
    const [notification, setNotification] = useState({ message: "", type: "" });

    globalNotifier = setNotification;

    return (
        <>
            {children}
            {notification.message && (
                <div
                    className={`fixed top-4 right-4 z-50 px-4 py-2 rounded shadow-lg ${
                        notification.type === "success" ? "bg-green-500" : "bg-red-500"
                    } text-white`}
                >
                    {notification.message}
                </div>
            )}
        </>
    );
}

export function notify(message, type = "success") {
    globalNotifier({ message, type });
    setTimeout(() => globalNotifier({ message: "", type: "" }), 3000); // Automatically hide notification after 3 seconds
}
