import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({ info }) {
  const hotImage =
    "https://www.seton.co.uk/legislationwatch/wp-content/uploads/2021/07/iStock-1192081488-scaled.jpg";
  const coldImage =
    "https://th.bing.com/th/id/R.7420925024dc69548af6c5918527b83b?rik=0W%2f4mwYUqemsHA&riu=http%3a%2f%2fcontent.khou.com%2fphoto%2f2018%2f01%2f02%2fThinkstockPhotos-868098786_1514925264801_12154981_ver1.0.jpg&ehk=NNDRuIfZjMLWWtcp2bcjjWiWzrGIv8S6utPx2DvUxbI%3d&risl=&pid=ImgRaw&r=0";
  const rainImage =
    "https://th.bing.com/th/id/OIP.a6NJ8XKZ4PxKeAPOZ7Ps5wHaE8?rs=1&pid=ImgDetMain";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 175 }}
            image={
              info.humidity > 80
                ? rainImage
                : info.temp > 15
                ? hotImage
                : coldImage
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {
                 info.humidity > 80
                 ? <ThunderstormIcon/>
                 : info.temp > 15
                 ? <WbSunnyIcon/>
                 : <AcUnitIcon/>
              }
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp} &deg;C </p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin} &deg;C</p>
              <p>Max Temp = {info.tempMax} &deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelIsLike}&deg;C{" "}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
