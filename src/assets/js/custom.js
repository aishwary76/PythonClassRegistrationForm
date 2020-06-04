<script type="text/javascript">



    function validation()
    {
       var user = document.getElementById('name').value;
       if(user == "")
       {
          document.getElementById('namee').innerHTML = "**Required Field";
          return false;
       }

       var user = document.getElementById('email').value;
       if(user == "")
       {
          document.getElementById('emaill').innerHTML = "**Required Field";
          return false;
       }


    }

</script>
