import { Card, CardContent, Grid, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { DetailPokemon } from "../interfaces/pokemon.interface"

interface PokemonStatsProps {
  pokemon: DetailPokemon
}

const PokemonStats = ({pokemon}: PokemonStatsProps) => {
  return (
    <Card>
      <CardContent>
        <Grid
          container
          justifyContent="center"
          spacing={2}
        >
          <Grid item>
          {pokemon ? (
          <Table size="small">
            <TableHead>
              <TableRow>
                {pokemon.stats.map((stat) => {
                  return <TableCell sx={{textTransform: "capitalize"}}>{stat.stat.name}</TableCell>
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {pokemon.stats.map((stat) => {
                return <TableCell>{stat.base_stat}</TableCell>
              })}
            </TableBody>
          </Table>
        ) : null}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default PokemonStats