import * as React from "react";
import "./styles.css";
export default () => {
  return (
    <div className="top-scroll">
      <input
        type="image"
        alt="top"
        onclick={topFunction()}
        Id="myBtn"
        title="Go to top"
        src="../assets/topArrow.png"
      />
    </div>
  );
};
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
