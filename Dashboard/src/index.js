const url = window.location.pathname;
console.log("url", url);

// if (url === "/hello") {
//   import("HelloApp/HelloPage").then((HelloPageModule) => {
//     const HelloPage = HelloPageModule.HelloPage;
//     const helloPage = new HelloPage();

//     helloPage.render();
//   });
// } else {
//   // if (url === "/bye") {
//   import("ByeApp/ByePage").then((ByePageModule) => {
//     // const ByePage = ByePageModule.ByePage;
//     // const byePage = new ByePage();
//     console.log("ByePage", ByePageModule);

//     // byePage.render();
//   });
//   // }
// }

if (url === "/hello") {
  import("ByeApp/ByePage").then((ByePageModule) => {
    const ByePage = ByePageModule.ByePage;
    const byePage = new ByePage();

    byePage.render();
  });
} else {
  import("HelloApp/HelloPage").then((HelloPageModule) => {
    const HelloPage = HelloPageModule.HelloPage;
    const helloPage = new HelloPage();

    helloPage.render();
  });
}
