$(document).ready(function () {
    var urlParams = new URLSearchParams(window.location.search);
    var personId = urlParams.get("pid");

    if (personId == null) {
        alert("No se ha recibido el ID de la persona");
        return;
    }

    $.ajax({
        url: `https://swapi.dev/api/people/${personId}/`,
        method: "GET",
    }).done(function (person) {
        var template = `
            <div class="card-body">
                <h5 class="card-title">${person.name}</h5>
                <p class="card-text">Height: ${person.height}</p>
                <p class="card-text">Mass: ${person.mass}</p>
                <p class="card-text">Hair Color: ${person.hair_color}</p>
                <p class="card-text">Skin Color: ${person.skin_color}</p>
                <p class="card-text">Eye Color: ${person.eye_color}</p>
                <p class="card-text">Birth Year: ${person.birth_year}</p>
                <p class="card-text">Gender: ${person.gender}</p>
            </div>`;
        $("#person-details").html(template);
    }).fail(function () {
        alert("Error al obtener los detalles de la persona");
    });
});

