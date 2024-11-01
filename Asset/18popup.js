let closeWebsite = window.close
document.cookie = "ConfirmInStore"


window.addEventListener("load", function() {
    if(!getConfirmInStore()) {
      if(promptConfirm()) {
        setConfirmInStore();
      } else {
        closeWebsite();
      }
    }
  }