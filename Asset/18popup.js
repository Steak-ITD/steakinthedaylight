window.addEventListener("load", function() {
    if(!getConfirmFromStore()) {
      if(promptConfirm()) {
        setConfirmInStore();
      } else {
        closeWebsite();
      }
    }
  }