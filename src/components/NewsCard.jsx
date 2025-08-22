import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

export default function NewsCard({ article }) {
  return (
    <Card
      className='shadow-lg rounded-2xl'
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {article.urlToImage && (
        <CardMedia
          component='img'
          height='160'
          image={article.urlToImage}
          alt={article.title}
        />
      )}

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant='h6' gutterBottom noWrap>
          {article.title}
        </Typography>
        <Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
          {article.description || "No description available"}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size='small'
          color='primary'
          href={article.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          Read more…
        </Button>
      </CardActions>
    </Card>
  );
}
