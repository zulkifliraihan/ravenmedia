import React from "react";

const Clients = () => {
    return (
        <>
            <div className="features-area ptb-100" id="client">
                <div className="container">
                    <div className="section-title">
                        <h2>Client Kami</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 division-col">
                            <img className="img-client" src="/images/clients/telkom-indonesia.png" alt="clients" />
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 division-col">
                            <img className="img-client" src="/images/clients/telkomsel.png" alt="clients" />
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6 division-col">
                            <img className="img-client" src="/images/clients/aeon.jpg" alt="clients" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clients;