

let weatherPrompt = "What weather are you feeling like?\n1. Cloudy\n2. Rainy\n3. Sunny\n4. Snowy\n5. Windy";
let userChoice = prompt(weatherPrompt);


userChoice = userChoice.toLowerCase();

if (userChoice === "cloudy" || userChoice === "1") {
    document.write(`<div class="cloudy">
        <div class=" container mt-5 d-flex justify-content-center">
    <div class="card weather-card" style="width: 18rem; border: 1px solid #d3d3d3; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <img src="https://i.makeagif.com/media/8-26-2023/cjaI99.gif" class="card-img-top" alt="Cloudy Weather Image" style="height: 150px; object-fit: cover;">
        <div class="card-body">
            <h5 class="card-title">Cloudy Weather</h5>
            <p class="card-text">The sky is covered with clouds, making it a perfect day to relax indoors or enjoy a calm walk outside.</p>
            <a href="#" class="btn btn-primary">More Details</a>
        </div>
    </div>
</div>
        </div>
`);
} else if (userChoice === "rainy" || userChoice === "2"){

    document.write(`<div class="rainy">
        <div class="container mt-5 d-flex justify-content-center">
    <div class="card weather-card" style="width: 18rem; border: 1px solid #d3d3d3; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <img src="https://giffiles.alphacoders.com/105/105296.gif" alt="Cloudy Weather Image" style="height: 150px; object-fit: cover;">
        <div class="card-body">
            <h5 class="card-title">Rainy Weather</h5>
            <p class="card-text">The sky is covered with clouds, making it a perfect day to relax indoors or enjoy a calm walk outside.</p>
            <a href="#" class="btn btn-info">More Details</a>
        </div>
    </div>
</div>
        </div>
`)
} else if(userChoice === "sunny" || userChoice === "3" ){
    document.write(`<div class="sunny">
        <div class="container mt-5 d-flex justify-content-center">
    <div class="card weather-card" style="width: 18rem; border: 1px solid #d3d3d3; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <img src="https://giffiles.alphacoders.com/215/215041.gif" class="card-img-top" alt="Cloudy Weather Image" style="height: 150px; object-fit: cover;">
        <div class="card-body">
            <h5 class="card-title">Sunny Weather</h5>
            <p class="card-text">The sky is covered with clouds, making it a perfect day to relax indoors or enjoy a calm walk outside.</p>
            <a href="#" class="btn btn-warning">More Details</a>
        </div>
    </div>
</div>
        </div>`)
}else if(userChoice === "snowy" || userChoice === "4"){
    document.write(`<div class="snowy">
        <div class="container mt-5 d-flex justify-content-center">
    <div class="card weather-card" style="width: 18rem; border: 1px solid #d3d3d3; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <img src="https://www.icegif.com/wp-content/uploads/2022/11/icegif-883.gif" class="card-img-top" alt="Cloudy Weather Image" style="height: 150px; object-fit: cover;">
        <div class="card-body">
            <h5 class="card-title">Snowy Weather</h5>
            <p class="card-text">The sky is covered with clouds, making it a perfect day to relax indoors or enjoy a calm walk outside.</p>
            <a href="#" class="btn btn-primary">More Details</a>
        </div>
    </div>
</div>
        </div>`)
}else if(userChoice === "windy" || userChoice === "5"){
    document.write(`<div class="windy">
        <div class="container mt-5 d-flex justify-content-center">
    <div class="card weather-card" style="width: 18rem; border: 1px solid #d3d3d3; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <img src="https://i.gifer.com/embedded/download/7eWy.gif" class="card-img-top" alt="Cloudy Weather Image" style="height: 150px; object-fit: cover;">
        <div class="card-body">
            <h5 class="card-title">Windy Weather</h5>
            <p class="card-text">The sky is covered with clouds, making it a perfect day to relax indoors or enjoy a calm walk outside.</p>
            <a href="#" class="btn btn-success">More Details</a>
        </div>
    </div>
</div>
        </div>`)

}else{
    document.write(` <div class="error-container">
        <img src="https://www.limonhost.net/makaleler/wp-content/uploads/2020/10/404-not-found-sayfa-bulunamadi-hatasi-ve-cozumu.png" alt="Error Illustration">
        <h1>You're Putting Something Wrong!</h1>
        <p>Woooops! looks like this page doesn't exist . Please try again.</p>
        <button class="btn btn-danger" onclick="window.location.reload();">Try Again</button>
    </div>`)
}

