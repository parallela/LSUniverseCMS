export const getRoute = (name = "", params = {}) => {
    // Get the route path
    let routePath = window._apiRoutes[name];

    // Match all parameters from route name.
    // Example: {id}, {username} etc.
    const matches = routePath.match(/{[a-zA-Z]+?}/g);

    // Check if the url have parameters
    if (matches) {

        // Check if params are empty on route that must have params
        if (Object.entries(params).length === 0) {
            throw new Error(`
            The route "${name}" has the following params
            ${matches.map((param) => ` ${param} `)}
            `);
        }

        // Replace params with the current values
        matches.forEach((tplStringToRepl) => {
            let templateString = tplStringToRepl.replace(/{|}/g, "");
            routePath = routePath.replace(tplStringToRepl, params[templateString])
        });
    }

    // Return the path
    return routePath;
}

