$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(1350, 400, 50, 50 );
 createPlatform(700, 700, 50, 50 );
 createPlatform(800, 600, 50, 50 );
 createPlatform(900, 500, 50, 50 );
createPlatform(1000, 400, 20, 190)
createFakePlatform(700, 400, 50, 50);
createFakePlatform(900, 300, 50, 50 );
createBadPlatform(1100, 400, 50, 50)
createPlatform(1200, 400, 50, 50)
createBadPlatform(750, 700, 900, 50)
createPlatform(700, 200, 50, 50)



    // TODO 3 - Create Collectables
createCannon("bottom", 1250, 1000);
createCannon("top", 400, 500)
createCannon("right", 300, 2000)
createCollectable("steve", 1350, 300,);
createCollectable( "grace", 500, 700, 0.1, 2);
createCollectable("max", 1200, 350, );


    
    // TODO 4 - Create Cannons
createCannon("right", 300, 2000);
createCannon("bottom", 1250, 1000);
createCannon("top", 400, 500);    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
