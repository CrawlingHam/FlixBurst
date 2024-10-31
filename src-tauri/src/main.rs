// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{WindowBuilder, Manager};

#[tauri::command]
fn create_new_window(app_handle: tauri::AppHandle) {
    let _new_window = WindowBuilder::new(
        &app_handle,      // Pass the Tauri App handle to associate the window with the app.
        "new_window",     // Unique identifier for this window.
        tauri::WindowUrl::App("index.html".into()), // URL or path to the content to display.
    )
    .title("New Window")    // Sets the title of the new window.
    .resizable(true)        // Allows resizing of the window.
    .fullscreen(false)      // Not fullscreen.
    .decorations(true)      // Adds window decorations like title bar.
    .build()                // Creates the window.
    .expect("Failed to create window"); // Error handling if the window fails to create.
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![create_new_window])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
