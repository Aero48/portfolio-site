import * as MODEL from "./model.js";

function changeRoute() {
  let pageID = window.location.hash.replace("#", "");
  if (pageID == "" || pageID == "home") {
    MODEL.changePage(pageID);
  } else {
    MODEL.changePage(pageID);
  }
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

function toggleHamburger() {
  if ($("#hamburger-menu").css("top") == "60px") {
    //$("#hamburger-menu").css("visibility", "hidden");
    $("#hamburger-menu").css("top", "-150px");
  } else {
    //$("#hamburger-menu").css("visibility", "visible");
    $("#hamburger-menu").css("top", "60px");
  }
}

$(document).ready(function () {
  //initURLListener();
  $("#hamburger-button").on("click", toggleHamburger);
});
