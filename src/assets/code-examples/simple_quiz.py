import gooeypie as gp

def check_answer(event):
    """Checks the answers and gives feedback in a popup."""
    if python_chk.checked and java_chk.checked and not html_chk.checked and not esperanto_chk.checked:
        app.alert("Correct", "You got it!", "info")
    else:
        app.alert("Incorrect", "Not quite - try again!", "error")


app = gp.GooeyPieApp("Quiz time!")

# Create question label and checkboxes
question_label = gp.Label("Which of the following are programming languages?")
python_chk = gp.Checkbox("Python")
html_chk = gp.Checkbox("HTML")
esperanto_chk = gp.Checkbox("Esperanto")
java_chk = gp.Checkbox("Java")

# Create question frame and add question and checkboxes
question_frame = gp.Frame()
question_frame.add(question_label, 1, 1, align_horizontal="left")
question_frame.add(python_chk, 1, 2, align_horizontal="left")
question_frame.add(html_chk, 1, 3, align_horizontal="left")
question_frame.add(esperanto_chk, 1, 4, align_horizontal="left")
question_frame.add(java_chk, 1, 5, align_horizontal="left")

# Answer button
check_answer_btn = gp.Button("Check Answer", check_answer)

# Add question frame and button to app
app.add(question_frame, 1, 1)
app.add(check_answer_btn, 1, 2)

app.run()
