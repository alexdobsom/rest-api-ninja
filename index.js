

app.listen(process.env.PORT || 5000, function() {
  document.write('tadaaaam!!!')
  console.log('Node app is running on port', app.get('port'));
});
