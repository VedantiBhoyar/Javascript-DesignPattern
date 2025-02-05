// The Proxy Pattern is like having a middleman who controls access to another object.
// Instead of interacting directly with an object, you interact with the proxy.
// The proxy can add additional behavior, like caching, access control, or logging,
// before forwarding your request to the real object.

class API {
    fetchData() {
        console.log("Fetching Data")
        return { Data: "Data Fetched" }
    }

}
class APIProxy {
    constructor() {
        this.api = new API();
        this.cache = null;
    }
    fetchData() {
        if (!this.cache) {
            this.cache = this.api.fetchData();
        }
        else {
            console.log("Returning fetched data")
        }
        return this.cache;
    }

}
const apiProxy = new APIProxy();
console.log(apiProxy.fetchData());
console.log(apiProxy.fetchData());
