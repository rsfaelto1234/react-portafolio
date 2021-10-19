import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        p: 1,
        borderRadius: 1,
        textAlign: 'center',
        fontSize: 19,
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.object,
};

export default function Gap() {
  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
      >
        <Item>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://source.unsplash.com/random"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Primera Obra de Arte
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Sumar Like</Button>
              <Button size="small">Restar Like</Button>
            </CardActions>
          </Card>
        </Item>
        <Item>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://source.unsplash.com/random"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Segunda Obra de Arte
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Sumar Like</Button>
              <Button size="small">Restar Like</Button>
            </CardActions>
          </Card>
        </Item>
        <Item>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://source.unsplash.com/random"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tercera Obra de Arte
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Sumar Like</Button>
              <Button size="small">Restar Like</Button>
            </CardActions>
          </Card>
        </Item>
        <Item>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://source.unsplash.com/random"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cuarta Obra de Arte
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Sumar Like</Button>
              <Button size="small">Restar Like</Button>
            </CardActions>
          </Card>
        </Item>
        <Item>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://source.unsplash.com/random"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Quinta Obra de Arte
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Sumar Like</Button>
              <Button size="small">Restar Like</Button>
            </CardActions>
          </Card>
        </Item>
        <Item>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://source.unsplash.com/random"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Sexta Obra de Arte
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Sumar Like</Button>
              <Button size="small">Restar Like</Button>
            </CardActions>
          </Card>
        </Item>
        <Item>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://source.unsplash.com/random"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Septima Obra de Arte
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Sumar Like</Button>
              <Button size="small">Restar Like</Button>
            </CardActions>
          </Card>
        </Item>
        <Item>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://source.unsplash.com/random"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Octava Obra de Arte
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Sumar Like</Button>
              <Button size="small">Restar Like</Button>
            </CardActions>
          </Card>
        </Item>
        <Item>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://source.unsplash.com/random"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Novena Obra de Arte
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Sumar Like</Button>
              <Button size="small">Restar Like</Button>
            </CardActions>
          </Card>
        </Item>
      </Box>
    </div>
  );
}
