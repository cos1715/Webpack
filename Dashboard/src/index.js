import { NavigationBar } from "./components/navigationBar";

const url = window.location.pathname;

const navData = [
  {
    url: "/hello",
    title: "Hello",
  },
  {
    url: "/bye",
    title: "Bye",
  },
];

const navigationBar = new NavigationBar();
navigationBar.render(navData);

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
