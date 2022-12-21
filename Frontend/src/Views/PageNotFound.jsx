const PageNotFound = function () {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Page not found</h5>
                <p class="card-text">
                    Go to a specific useful url
                </p>
                <a href="/list/1" class="btn btn-primary">
                    Go to lists
                </a>
            </div>
        </div>
    );
};

export default PageNotFound;
