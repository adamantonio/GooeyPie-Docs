import gooeypie as gp

def mouse_entered(event):
    status_lbl.text = "Mouse entered the square!"

def mouse_left(event):
    status_lbl.text = "Mouse left the square!"

def mouse_clicked(event):
    status_lbl.text = "Square clicked!"

def mouse_right_clicked(event):
    status_lbl.text = "Square RIGHT-clicked!"

app = gp.GooeyPieApp("Events in GooeyPie")

# Make a blue square for an event target
event_lbl = gp.Label()
event_lbl.width = 100
event_lbl.height = 100
event_lbl.style.bg_color = "steelblue"

event_lbl.on_mouse_enter(mouse_entered)
event_lbl.on_mouse_leave(mouse_left)
event_lbl.on_click(mouse_clicked)
event_lbl.on_right_click(mouse_right_clicked)

status_lbl = gp.Label("Interact with the square to see events")

app.add(event_lbl, 1, 1)
app.add(status_lbl, 1, 2)

app.run()
