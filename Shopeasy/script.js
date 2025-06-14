<script>
    let images = [
        "url('https://source.unsplash.com/random/1600x900')",
        "url('https://source.unsplash.com/random/1600x901')",
        "url('https://source.unsplash.com/random/1600x902')"
    ];

    function changeBg() {
        document.body.style.backgroundImage = images[Math.floor(Math.random() * images.length)];
        document.body.style.backgroundSize = "cover";
    }


        function changeBackground() {
            const colors = ["#ff5733", "#33ff57", "#5733ff", "#ffd700", "#00ffff"];
            document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        }

    setInterval(changeBg, 5000); // Change background every 5 seconds
</script>
