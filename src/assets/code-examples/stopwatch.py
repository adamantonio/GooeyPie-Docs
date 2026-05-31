import gooeypie as gp

def update_time():
    """Updates the time display to MM:SS.mmm format"""
    mins = stopwatch.minutes
    secs = stopwatch.seconds
    ms = stopwatch.milliseconds
    formatted_time_lbl.text = f'{mins:02}:{secs:02}.{ms:03}'

def start_pause(event):
    """Starts or pauses the stopwatch depending on the current state."""
    if start_pause_btn.text == 'Start':
        stopwatch.start()
        start_pause_btn.text = 'Pause'
    else:
        stopwatch.pause()
        start_pause_btn.text = 'Start'

def stop(event):
    """Stops the stopwatch and resets the time to 00:00.000."""
    stopwatch.stop()
    start_pause_btn.text = 'Start'

app = gp.GooeyPieApp('Stopwatch')
stopwatch = gp.Timer()

# Create widgets
formatted_time_lbl = gp.Label('00:00.000')
formatted_time_lbl.style.font_size = 40
start_pause_btn = gp.Button('Start', start_pause)
stop_btn = gp.Button('Reset', stop)

# Add widgets to window
app.add(formatted_time_lbl, 1, 1, column_span=2, align_horizontal='center')
app.add(start_pause_btn, 1, 2, expand_horizontal=True)
app.add(stop_btn, 2, 2, expand_horizontal=True)

# Update the time display every 1ms (approx)
app.set_interval(1, update_time)

app.run()
