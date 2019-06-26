const register = (swUrl = '', config = {}) => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          navigator.serviceWorker.register('/pokedex-serviceworker.js')
          .then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          })
          .catch(function(err) {
            console.log('ServiceWorker registration failed: ', err);
          });
        });
      }
};

export default register;