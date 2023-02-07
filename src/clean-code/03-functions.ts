(() => {

  // función para obtener información de una película por Id
  function getAllMovieById(id: string) {
    console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCastById(movieId: string) {
    console.log({ movieId });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBioById(actorId: string) {
    console.log({ actorId });
  }

  interface Movie {
    cast: string[]
    description: string,
    rating: number,
    title: string,
  }

  // Crear una película
  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {

    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === 'fernando') return false;

    console.log('Crear actor');
    return true;

  }


  //Continuar
  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {

    isDead && (1500);
    isSeparated && (2500);
    isRetired
      ? 3000
      : 4000;
  }

})();
