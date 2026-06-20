open_file_window = gp.OpenFileWindow("Open File")
open_file_window.add_file_type("Python files", "*.py")
open_file_window.set_initial_folder('desktop')
open_file_window.open()