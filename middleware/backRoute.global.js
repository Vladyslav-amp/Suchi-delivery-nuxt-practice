export default defineNuxtRouteMiddleware((to, from) => {
  const useStatePageName = useState("statePageName");
  const useIsBackButton = useState("isBackButton");
  const useIsCartButton = useState("isCartButton");

// If route is index or category itd. display proper page name ex. Menu or Cart

  if (to.name === "index") {
    useStatePageName.value = "Menu"; // Set the page name to "Menu"
    useIsBackButton.value = false; // Show back button
    useIsCartButton.value = true; // Show Cart button
    //
  } else if (to.name === "category") {
    useStatePageName.value = "Menu"; // Set the page name to "Menu"
    useIsBackButton.value = true; // Show back button
    useIsCartButton.value = true;// Show Cart button
    //
  } else if (to.name === "category-subcategory") {
    useStatePageName.value = "Menu"; // Set the page name to "Menu"
    useIsBackButton.value = true; // Show back button
    useIsCartButton.value = true;// Show Cart button
    //
  } else if (to.name === "cart") {
    useStatePageName.value = "Cart"; // Set the page name to "Cart"
    useIsBackButton.value = true; // Show back button
    useIsCartButton.value = true;// Show Cart button
    //
  } else {
    useStatePageName.value = ""; //Clear page name
    useIsBackButton.value = true; // Show back button
    useIsCartButton.value = true;// Show Cart button
  }
});
