function show() { 
    document.getElementById("hide").classList.add("show")

      if (document.getElementById("hide").classList = 'show') {
        document.getElementById("show-more").classList.add("hide")
        document.getElementById("show-less").classList.remove("hide")
    }
  }

  function showLess() { 
    document.getElementById("hide").classList.remove("show")

      if (document.getElementById("hide").classList = 'row') {
        document.getElementById("show-more").classList.remove("hide")
        document.getElementById("show-less").classList.add("hide")
    }
  }