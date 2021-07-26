import React from "react";

const Inicio = () => {
    return (
        <div className="container">
            <div class="col-sm-6">
                <div class="container mt-4" >
                    <div class="card">
                        <div class="card-header text-white bg-info mb-3" >Data</div>
                        <div class="card-body">
                            <div class="form-row">
                                <div class="col-md-6 mb-3">
                                    <label for="validationTooltip01">
                                        Word
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="searchWord"
                                        placeholder="Word"
                                        name="searchWord"
                                        required
                                    />
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="validationTooltip02">
                                        Neuronal network model
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="neuronalNnetwork"
                                        placeholder="Neuronal network model"
                                        name="neuronalNnetwork"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-6 mb-3">
                                    <label for="validationTooltip03">
                                        Percentage
                                    </label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        id="percentaje"
                                        placeholder="Percentage"
                                        name="percentaje"
                                        required
                                    />
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="exampleFormControlFile1">
                                        Select your video
                                    </label>
                                    <input
                                        type="file"
                                        class="form-control-file"
                                        id="imageFile"
                                        name="imageFile"
                                        accept="image/jpeg"
                                    />
                                </div>
                            </div>
                            <button class="btn btn-primary" type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="container mt-4">
                    <div class="card">
                        <div class="card-header text-white bg-dark mb-3">List of results</div>
                        <div class="card-body">
                            <div class="form-row">
                                <div class="table-responsive-lg">
                                    <table class="table">
                                        <caption>List of results</caption>
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Algorithm</th>
                                                <th scope="col">Word</th>
                                                <th scope="col">Percentaje</th>
                                                <th scope="col">Image</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                                <td>@mdo</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inicio;

