import gooeypie as gp

app = gp.GooeyPieApp("Spanning Rows and Columns")

# Create widgets
button1 = gp.Button("1,1", None)
red_button = gp.Button("2,1 (Spanning 2 columns)", None)
green_button = gp.Button("1,2 (Spanning 2 rows)", None)
button4 = gp.Button("2,2", None)
button5 = gp.Button("3,2", None)
button6 = gp.Button("2,3", None)
button7 = gp.Button("3,3", None)

red_button.style.button_color = 'IndianRed'
green_button.style.button_color = 'MediumSeaGreen'

# Row 1
app.add(button1, 1, 1)
app.add(red_button, 2, 1, column_span=2, expand_horizontal=True) # Spans col 2 and 3

# Row 2
app.add(green_button, 1, 2, row_span=2, expand_vertical=True)    # Spans row 2 and 3
app.add(button4, 2, 2)
app.add(button5, 3, 2)

# Row 3 (filling in the rest)
app.add(button6, 2, 3)
app.add(button7, 3, 3)

app.run()
