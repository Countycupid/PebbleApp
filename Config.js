<script>
  //Setup to allow easy adding more options later
  function saveOptions() {
    var invertSelect = document.getElementById("invert_select");
 
    var options = {
      "invert": invertSelect.options[invertSelect.selectedIndex].value
    }
     
    return options;
  };
 
  var submitButton = document.getElementById("save_button");
  submitButton.addEventListener("click", 
    function() {
      console.log("Submit");
 
      var options = saveOptions();
      var location = "pebblejs://close#" + encodeURIComponent(JSON.stringify(options));
       
      document.location = location;
    }, 
  false);
</script>
