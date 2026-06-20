save_file_window = gp.SaveFileWindow("Save File")
save_file_window.add_file_type("Text files", "*.txt")
save_file_window.set_initial_folder('desktop')
save_file_window.open()