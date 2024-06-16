import { Grid } from "@mui/material";
import { IndexedPokemon, ListPokemon } from "../interfaces/pokemon.interface";
import PokemonCard from "./PokemonCard";

interface PokemonListProps {
  pokemons: ListPokemon[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <Grid container spacing={2}>
      {pokemons.length > 0
        ? pokemons.map((p, index) => {
            return (
              <Grid key= {index} item xs={4}>
                <PokemonCard key={p.name} pokemon={p} />
              </Grid>
            );
          })
        : null}
    </Grid>
  );
};

export default PokemonList;

