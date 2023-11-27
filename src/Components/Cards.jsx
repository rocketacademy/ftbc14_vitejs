function importAll(r) {
  let images = {};
  Object.keys(r).map((item) => {
    images[item.replace("./", "")] = new URL(item, import.meta.url).href;
  });
  return images;
}

export default function Cards(props) {
  const images = importAll(import.meta.glob("./Assets/*"));
  console.log(images);
  console.log(images[[`Assets/4_of_diamonds.png`]]);
  console.log(`${images[`Assets/4_of_diamonds.png`]}`);
  return (
    <div>
      <img src={images[`Assets/2_of_clubs.png`]} alt="image?" />
    </div>
  );
}
