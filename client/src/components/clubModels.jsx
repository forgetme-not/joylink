export default function ClubModels({ category, index }) {

  const applicationForm = "/vr_src/application_form.png";

  // 보드게임 동아리
  const monopoly = "vr_src/boardgame_club/new_monopoly.glb";
  const checker = "vr_src/boardgame_club/checkers.glb";
  const boardgame = "vr_src/boardgame_club/chess.glb";
  const boardgamePoster = "vr_src/boardgame_club/boardgame_poster.png";
  const boardgameBanner = "vr_src/boardgame_club/boardgame_banner.png";
  const boardgameBanner2 = "vr_src/boardgame_club/boardgame_banner2.png";

  // 독서 동아리
  const books1 = "vr_src/reading_club/books.glb";
  const bookopen = "vr_src/reading_club/bookopen.glb";
  const books2 = "vr_src/reading_club/tea_time.glb";
  const readingPoster = "vr_src/reading_club/reading_poster.png";
  const readingBanner = "vr_src/reading_club/reading_banner.png";
  const readingBanner2 = "vr_src/reading_club/reading_banner2.png";

  // 사진 동아리
  const picture1 = "vr_src/photography_club/wall_decoration_picture.glb";
  const picture2 = "vr_src/photography_club/new_picture2.glb";
  const camera = "vr_src/photography_club/reflex_camera.glb";
  const box = "vr_src/photography_club/cardboard_box.glb";
  const photographyPoster = "vr_src/photography_club/photography_poster.png";
  const photographyBanner = "vr_src/photography_club/photography_banner.png";
  const photographyBanner2 = "vr_src/photography_club/photography_banner2.png";

  // 밴드 동아리
  const microphone = "vr_src/band_club/new_microphone.glb";
  const guitar = "vr_src/band_club/new_guitar.glb";
  const drum = "vr_src/band_club/new_drum.glb";
  const bandPoster = "vr_src/band_club/band_poster.png";
  const bandBanner = "vr_src/band_club/band_banner.jpg";
  const bandBanner2 = "vr_src/band_club/band_banner2.png";
  const speaker = "vr_src/band_club/new_audio_speaker.glb";

  // 등산 동아리
  const backpack = "vr_src/climbing_club/new_backpack.glb";
  const hat = "vr_src/climbing_club/new_hat.glb";
  const mountain = "vr_src/climbing_club/new_mountain.glb";
  const water = "vr_src/climbing_club/new_water.glb";
  const climbingPoster = "vr_src/climbing_club/climbing_poster.png";
  const climbingbanner2 = "vr_src/climbing_club/climbingbanner.png";
  const climbingBanner = "vr_src/climbing_club/climbing_banner.png";

  // 여행 동아리
  const travelTent = "vr_src/traveling_club/travel_tent.glb";
  const grill = "vr_src/traveling_club/grill.glb";
  const map = "vr_src/traveling_club/korean_map.png";
  const steak1 = "vr_src/traveling_club/steak1.glb";
  const steak2 = "vr_src/traveling_club/steak2.glb";
  const travelPoster = "vr_src/traveling_club/travel_poster.png";
  const travelBanner = "vr_src/traveling_club/travel_banner.png";
  const travelBanner2 = "vr_src/traveling_club/travel_banner2.png";

  // 축구동아리 소스
  // const footballshoes = "vr_src/football_club/football_shoes.glb"
  const football_set = "vr_src/football_club/new_ball.glb"
  const football_goal = "vr_src/football_club/football_goal.glb"
  const soccer_uniform = "vr_src/football_club/soccer_uniform.glb"
  const cone = "vr_src/football_club/cone.glb"
  const trophy = "/vr_src/football_club/trophy.glb"
  const footballposter = "/vr_src/football_club/footballclub.png";
  const ball = "/vr_src/football_club/new_ball.glb"
  const footballtable = "/vr_src/football_club/new_football_Gambling.glb"
  const footballbenner = "vr_src/football_club/footballbenner.png"
  const footballbenner2 = "vr_src/football_club/footballbenner2.png"
  //로봇제어계측 동아리
  const mechanic_arm = "vr_src/mechanic_club/mechanic_arm.glb"
  const workshop = "vr_src/mechanic_club/machine_workshop.glb"
  const drone2 = "vr_src/mechanic_club/drone_low_poly.glb"
  const tool_box = "vr_src/mechanic_club/tool_box.glb"
  const controller = "vr_src/mechanic_club/new_controller.glb"
  const highrowposter = "vr_src/mechanic_club/highrow.jpg"
  const highrowbanner = "vr_src/mechanic_club/highrowbanner.png"
  const highrowbanner2 = "vr_src/mechanic_club/highrowbanner2.png"
  //술 동아리
  const alcohol_set = "vr_src/alcohol/new_bottle_set_alcohol.glb"
  const wine = "vr_src/alcohol/new_wine.glb"
  const mini_alcohol_bar = "vr_src/alcohol/newbottle_set_alcohol.glb"
  const barrel = "vr_src/alcohol/barrel.glb"
  const alcoholposter = "vr_src/alcohol/alcoholposter.jpg"
  const alcoholbanner = "vr_src/alcohol/alcoholbanner.png"
  const alcoholbanner2 = "vr_src/alcohol/alcoholbanner2.png"
  const bottles = "vr_src/alcohol/bottles.glb"
  const table = "vr_src/alcohol/table.glb"
  //주식 동아리
  const chart = "vr_src/stockclub/chart.glb"
  const boxes = "vr_src/stockclub/new_boxes.glb"
  const file = "vr_src/stockclub/new_file.glb"
  const stockposter = "vr_src/stockclub/stockposter.jpg"
  const stockbanner = "vr_src/stockclub/stockbanner.png"
  const stockbanner2 = "vr_src/stockclub/stockbanner2.png"
  const boxes2 = "vr_src/stockclub/boxes2.glb"
  const newspaper = "vr_src/stockclub/newspaper.glb"
  //사람 오브젝트
  // const soccerman = "vr_src/people/newsoccerman.glb"
  const soccergirl = "vr_src/people/soccergirl.glb"
  const korean = "vr_src/people/newkorean.glb"
  const korean2 = "vr_src/people/newkorean2.glb"
  // const korean3 = "vr_src/people/newkorean3.glb"
  const korean4 = "vr_src/people/korean4.glb"
  const korean5 = "vr_src/people/franklin.glb"
  const person1 = "vr_src/people/person1.glb";
  const person2 = "vr_src/people/person2.glb";
  const person3 = "vr_src/people/person3.glb";
  const person4 = "vr_src/people/person4.glb";
  // newperson5 교체 필요.
  const person5 = "vr_src/people/newperson55.glb";
  const person6 = "vr_src/people/person6.glb";
  const person7 = "vr_src/people/person7.glb";
  const person8 = "vr_src/people/person8.glb";

  return (
    <>

      {/* 보드게임 동아리 */}
      {category === "boardgame" &&
        <>
          <a-entity gltf-model={`url(${monopoly})`}
            position={`8.8 1 ${3.5 - (15 * index)}`}
            scale="0.001 0.001 0.001"
            rotation="0 -90 0"
            distance-culling="maxDistance: 20">
          </a-entity>
          <a-entity gltf-model={`url(${boardgame})`}
            position={`8.5 1 ${6 - (15 * index)}`}
            scale="0.08 0.08 0.08"
            rotation="0 90 0"
            distance-culling="maxDistance: 20">
          </a-entity>
          <a-entity gltf-model={`url(${checker})`}
            position={`8.5 1 ${5.5 - (15 * index)}`}
            scale="1.5 1.5 1.5"
            rotation="0 0 0"
            distance-culling="maxDistance: 20">
          </a-entity>
          <a-image class="clickable" src={applicationForm}
            position={`8.8 1 ${-0.5 - (15 * index)}`}
            width="0.84"
            height="1.2"
            rotation="-90 -90 0"
            link-to="url: /cbDescription"
            distance-culling="maxDistance: 20">
          </a-image>
          <a-image src={boardgamePoster}
            position={`5.05 1.05 ${6.5 - (15 * index)}`}
            width="0.84"
            height="1.2"
            rotation="-15 -90 0"
            distance-culling="maxDistance: 20">
          </a-image>
          <a-image src={boardgameBanner}
            position={`5.4 2.6 ${-0.4 - (15 * index)}`}
            height="0.7px"
            width="4.8px"
            rotation="0 -90 0"
            distance-culling="maxDistance: 50">
          </a-image>
          <a-image src={boardgameBanner2}
            position={`5.4 2.6 ${4.45 - (15 * index)}`}
            height="0.7px"
            width="4.8px"
            rotation="0 -90 0"
            distance-culling="maxDistance: 50">
          </a-image>
        </>
      }

      {/* 독서 동아리 */}
      {category === "reading" &&
        <>
          <a-entity gltf-model={`url(${books1})`}
            position={`9.2 1 ${5 - (15 * index)}`}
            scale="0.0018 0.0018 0.0018"
            rotation="0 180 0"
            distance-culling="maxDistance: 20">
          </a-entity>
          <a-entity gltf-model={`url(${bookopen})`}
            position={`8.3 1 ${5 - (15 * index)}`}
            scale="1.2 1.2 1.2"
            rotation="0 180 0"
            distance-culling="maxDistance: 20">
          </a-entity>
          <a-entity gltf-model={`url(${books2})`}
            position={`8.5 1 ${3.5 - (15 * index)}`}
            scale="0.5 0.5 0.5"
            rotation="0 0 0"
            distance-culling="maxDistance: 20">
          </a-entity>
          <a-image class="clickable" src={applicationForm}
            position={`8.8 1 ${-0.5 - (15 * index)}`}
            width="0.84"
            height="1.2"
            rotation="-90 -90 0"
            link-to="url: /cbDescription"
            distance-culling="maxDistance: 20">
          </a-image>
          <a-image src={readingPoster}
            position={`5.05 1.05 ${6.5 - (15 * index)}`}
            width="0.84"
            height="1.2"
            rotation="-15 -90 0"
            distance-culling="maxDistance: 20">
          </a-image>
          <a-image src={readingBanner}
            position={`5.4 2.6 ${-0.4 - (15 * index)}`}
            height="0.7px"
            width="4.8px"
            rotation="0 -90 0"
            distance-culling="maxDistance: 50">
          </a-image>
          <a-image src={readingBanner2}
            position={`5.4 2.6 ${4.45 - (15 * index)}`}
            height="0.7px"
            width="4.8px"
            rotation="0 -90 0"
            distance-culling="maxDistance: 50">
          </a-image>
        </>
      }

      {/* 사진 동아리 */}
      {category === "photography" &&
        <>
          <a-entity gltf-model={`url(${picture1})`}
            position={`8.15 1.0 ${6.1 - (15 * index)}`}
            scale="1 1 1"
            rotation="0 180 90"
            distance-culling="maxDistance: 20">
          </a-entity>
          <a-entity gltf-model={`url(${picture2})`}
            position={`8.55 1.4 ${4.1 - (15 * index)}`}
            scale="2 2 2"
            rotation="-30 0 0"
            distance-culling="maxDistance: 20">
          </a-entity>
          <a-entity gltf-model={`url(${camera})`}
            position={`8.5 1.2 ${3 - (15 * index)}`}
            scale="0.03 0.03 0.03"
            rotation="0 270 0"
            distance-culling="maxDistance: 20">
          </a-entity>
          <a-entity gltf-model={`url(${box})`}
            position={`8.93 1.2 ${4.8 - (15 * index)}`}
            scale="1 1 1"
            rotation="0 90 0"
            distance-culling="maxDistance: 20">
          </a-entity>
          <a-image class="clickable" src={applicationForm}
            position={`8.8 1 ${-0.5 - (15 * index)}`}
            width="0.84"
            height="1.2"
            rotation="-90 -90 0"
            link-to="url: /cbDescription"
            distance-culling="maxDistance: 20">
          </a-image>
          <a-image src={photographyPoster}
            position={`5.05 1.05 ${6.5 - (15 * index)}`}
            width="0.84"
            height="1.2"
            rotation="-15 -90 0"
            distance-culling="maxDistance: 20">
          </a-image>
          <a-image src={photographyBanner}
            position={`5.4 2.6 ${-0.4 - (15 * index)}`}
            height="0.7px"
            width="4.8px"
            rotation="0 -90 0"
            distance-culling="maxDistance: 50">
          </a-image>
          <a-image src={photographyBanner2}
            position={`5.4 2.6 ${4.45 - (15 * index)}`}
            height="0.7px"
            width="4.8px"
            rotation="0 -90 0"
            distance-culling="maxDistance: 50">
          </a-image>
        </>
      }

      {/* 밴드 동아리 */}
      {category === "band" &&
        <>
          <a-entity gltf-model={`url(${microphone})`}
            position={`6.5 0.1 ${5.5 - (15 * index)}`}
            scale="0.3 0.3 0.3"
            rotation="0 -90 0"
            distance-culling="maxDistance: 20">
          </a-entity>
          <a-entity gltf-model={`url(${guitar})`}
            position={`9 1.0 ${5.5 - (15 * index)}`}
            scale="0.015 0.015 0.015"
            rotation="0 -45 0"
            distance-culling="maxDistance: 20">
          </a-entity>
          <a-entity gltf-model={`url(${drum})`}
            position={`6 0.1 ${3.5 - (15 * index)}`}
            scale="1 1 1"
            rotation="0 -90 0"
            distance-culling="maxDistance: 20">
          </a-entity>
          <a-entity gltf-model={`url(${speaker})`}
            position={`9 1.0 ${4.5 - (15 * index)}`}
            scale="3 3 3"
            rotation="0 -90 0"
            distance-culling="maxDistance: 20">
          </a-entity>
          <a-entity gltf-model={`url(${speaker})`}
            position={`9 1.0 ${2.5 - (15 * index)}`}
            scale="3 3 3"
            rotation="0 -90 0"
            distance-culling="maxDistance: 20">
          </a-entity>
          {/* <a-entity gltf-model={`url(${mixer})`} 
                  position={`9 1.0 ${3.5-(15*index)}`}
                  scale="3 3 3"
                  rotation="0 -90 0">
        </a-entity> */}
          <a-image class="clickable" src={applicationForm}
            position={`8.8 1 ${-0.5 - (15 * index)}`}
            width="0.84"
            height="1.2"
            rotation="-90 -90 0"
            link-to="url: /cbDescription_2"
            distance-culling="maxDistance: 20">
          </a-image>
          <a-image src={bandPoster}
            position={`5.05 1.05 ${6.5 - (15 * index)}`}
            width="0.84"
            height="1.2"
            rotation="-15 -90 0"
            distance-culling="maxDistance: 20">
          </a-image>
          <a-image src={bandBanner}
            position={`5.4 2.6 ${-0.4 - (15 * index)}`}
            height="0.7px"
            width="4.8px"
            rotation="0 -90 0"
            distance-culling="maxDistance: 50">
          </a-image>
          <a-image src={bandBanner2}
            position={`5.4 2.6 ${4.45 - (15 * index)}`}
            height="0.7px"
            width="4.8px"
            rotation="0 -90 0"
            distance-culling="maxDistance: 50">
          </a-image>
        </>
      }

      {/* 등산 동아리 */}
      {category === "climbing" &&
        <>
          <a-entity gltf-model={`url(${backpack})`}
            position={`8.7 1.1 ${6 - (15 * index)}`}
            scale="0.15 0.15 0.15"
            rotation="0 90 -90"
            distance-culling="maxDistance: 20">
          </a-entity>
          <a-entity gltf-model={`url(${hat})`}
            position={`8.5 -1.5 ${4.7 - (15 * index)}`}
            scale="0.0015 0.0015 0.0015"
            rotation="0 -90 0"
            distance-culling="maxDistance: 20">
          </a-entity>
          <a-entity gltf-model={`url(${mountain})`}
            position={`8.7 1.1 ${3.5 - (15 * index)}`}
            scale="0.0005 0.0005 0.0005"
            rotation="0 -90 0"
            distance-culling="maxDistance: 20">
          </a-entity>
          <a-entity gltf-model={`url(${water})`}
            position={`9.2 1 ${6.2 - (15 * index)}`}
            scale="2 2 2"
            rotation="0 0 0"
            distance-culling="maxDistance: 20">
          </a-entity>
          <a-image class="clickable" src={applicationForm}
            position={`8.8 1 ${-0.5 - (15 * index)}`}
            width="0.84"
            height="1.2"
            rotation="-90 -90 0"
            link-to="url: /cbDescription"
            distance-culling="maxDistance: 20">
          </a-image>
          <a-image src={climbingPoster}
            position={`5.05 1.05 ${6.5 - (15 * index)}`}
            width="0.84"
            height="1.2"
            rotation="-15 -90 0"
            distance-culling="maxDistance: 20">
          </a-image>
          <a-image src={climbingBanner}
            position={`5.4 2.6 ${-0.4 - (15 * index)}`}
            height="0.7px"
            width="4.8px"
            rotation="0 -90 0"
            distance-culling="maxDistance: 50">
          </a-image>
          <a-image src={climbingbanner2}
            position={`5.4 2.6 ${4.45 - (15 * index)}`}
            height="0.7px"
            width="4.8px"
            rotation="0 -90 0"
            distance-culling="maxDistance: 50">
          </a-image>
        </>
      }

      {/* 여행 동아리 */}
      {category === "traver" &&
        <>
          <a-entity gltf-model={`url(${travelTent})`}
            position={`-7 0.8 ${1 - (15 * index)}`}
            scale="1 1 1"
            rotation="0 0 0"
            distance-culling="maxDistance: 20"
          >
          </a-entity>
          <a-entity gltf-model={`url(${grill})`}
            position={`-7.2 0.2 ${-2 - (15 * index)}`}
            scale="0.008 0.008 0.008"
            rotation="0 0 0"
            distance-culling="maxDistance: 20"
          >
          </a-entity>
          <a-entity gltf-model={`url(${water})`}
            position={`-9 1 ${0.5 - (15 * index)}`}
            scale="2 2 2"
            rotation="0 0 0"
            distance-culling="maxDistance: 20"
          >
          </a-entity>
          {/* <a-entity gltf-model={`url(${steak1})`}
            position={`-8.3 1 ${-1.5 - (15 * index)}`}
            scale="1.5 1.5 1.5"
            rotation="0 0 0"
            distance-culling="maxDistance: 20"
          >
          </a-entity> */}
          <a-entity gltf-model={`url(${steak2})`}
            position={`-8.3 1 ${-1 - (15 * index)}`}
            scale="0.05 0.05 0.05"
            rotation="-35 0 0"
            distance-culling="maxDistance: 20"
          >
          </a-entity>
          <a-image src={map}
            position={`-8.8 0.95 ${0.5 - (15 * index)}`}
            width="0.84"
            height="1.2"
            rotation="-90 90 0"
            distance-culling="maxDistance: 20"
          >
          </a-image>
          <a-image class="clickable" src={applicationForm}
            position={`-8.8 1 ${4.5 - (15 * index)}`}
            width="0.84"
            height="1.2"
            rotation="-90 90 0"
            link-to="url: /cbDescription"
            distance-culling="maxDistance: 20"
          >
          </a-image>
          <a-image src={travelPoster}
            position={`-5.05 1.05 ${-2 - (15 * index)}`}
            width="0.84"
            height="1.2"
            rotation="-15 90 0"
            distance-culling="maxDistance: 20"
          >
          </a-image>
          <a-image src={travelBanner}
            position={`-5.4 2.6 ${-0.4 - (15 * index)}`}
            height="0.7px"
            width="4.8px"
            rotation="0 90 0"
            distance-culling="maxDistance: 50"
          >
          </a-image>
          <a-image src={travelBanner2}
            position={`-5.4 2.6 ${4.45 - (15 * index)}`}
            height="0.7px"
            width="4.8px"
            rotation="0 90 0"
            distance-culling="maxDistance: 50"
          >
          </a-image>
        </>
      }

      {/* 축구동아리 */}
      {category === "football" &&
        <>
          {/* 축구동아리 베너 */}
          <a-image src={footballbenner}
            position={`-5.4 2.6 ${-0.4 - (15 * index)}`}
            height="0.7px"
            width="4.8px"
            rotation="0 90 0"
            distance-culling="maxDistance: 20"
          >
          </a-image>
          <a-image src={footballbenner2}
            position={`-5.4 2.6 ${4.45 - (15 * index)}`}
            height="0.7px"
            width="4.8px"
            rotation="0 90 0"
            distance-culling="maxDistance: 20"
          >
          </a-image>
          {/* 축구 동아리 포스터 */}
          <a-image src={footballposter}
            position={`-5 1 ${-2 - (15 * index)}`}
            rotation="-15 90 0"
            distance-culling="maxDistance: 20"
          >
          </a-image>
          {/* 축구게임테이블 */}
          <a-entity gltf-model={`url(${footballtable})`}
            position={`-5 0.2 ${0 - (15 * index)}`}
            scale="0.25 0.25 0.25"
            rotation="0 -0 0"
            distance-culling="maxDistance: 20"
          ></a-entity>
          {/* 축구공 */}
          <a-entity gltf-model={`url(${ball})`}
            position={`-5 0.2 ${2 - (15 * index)}`}
            scale="0.005 0.005 0.005"
            rotation="0 -90 0"
            distance-culling="maxDistance: 20"
          ></a-entity>
          {/* 트로피 */}
          <a-entity gltf-model={`url(${trophy})`}
            position={`-9 1 ${0 - (15 * index)}`}
            scale="0.3 0.3 0.3"
            rotation="0 -90 0"
            distance-culling="maxDistance: 20"
          ></a-entity>
          <a-entity gltf-model={`url(${trophy})`}
            position={`-9 1 ${-0.5 - (15 * index)}`}
            scale="0.3 0.3 0.3"
            rotation="0 -90 0"
            distance-culling="maxDistance: 20"
          ></a-entity>
          {/* <a-entity gltf-model={`url(${footballshoes})`} 
        position={`-6 0.5 ${1-(15*index)}`}
        scale="1.5 1.5 1.5"
        rotation="0 -90 0"></a-entity> */}

          <a-entity gltf-model={`url(${football_set})`}
            position={`-6 0.25 ${-4 - (15 * index)}`}
            rotation="0 90 0"
            scale="0.005 0.005 0.005"
            distance-culling="maxDistance: 20"
          ></a-entity>
          <a-entity gltf-model={`url(${football_goal})`}
            position={`-6 1.3 ${-4 - (15 * index)}`}
            rotation="0 90 0"
            scale="0.01 0.01 0.01"
            distance-culling="maxDistance: 20"
          ></a-entity>

          <a-entity gltf-model={`url(${soccer_uniform})`}
            position={`-9 1.2 ${-2 - (15 * index)}`}
            rotation="0 180 0"
            distance-culling="maxDistance: 20"
          ></a-entity>
          <a-entity gltf-model={`url(${cone})`}
            position={`-6 0.2 ${1.7 - (15 * index)}`}
            scale="0.1 0.1 0.1"
            rotation="0 -90 0"
            distance-culling="maxDistance: 20"
          ></a-entity>
          <a-entity gltf-model={`url(${cone})`}
            position={`-5.5 0.2 ${1 - (15 * index)}`}
            scale="0.1 0.1 0.1"
            rotation="0 -90 0"
            distance-culling="maxDistance: 20"
          ></a-entity>
          <a-entity gltf-model={`url(${cone})`}
            position={`-5.5 0.2 ${1.4 - (15 * index)}`}
            scale="0.1 0.1 0.1"
            rotation="0 -90 0"
            distance-culling="maxDistance: 20"
          ></a-entity>
          <a-entity gltf-model={`url(${cone})`}
            position={`-5.5 0.3 ${1 - (15 * index)}`}
            scale="0.1 0.1 0.1"
            rotation="0 -90 0"
            distance-culling="maxDistance: 20"
          ></a-entity>
          <a-image class="clickable" src={applicationForm}
            position={`-8.8 1 ${4.5 - (15 * index)}`}
            width="0.84"
            height="1.2"
            rotation="-90 90 0"
            link-to="url: /cbDescription_1"
            distance-culling="maxDistance: 20"
          >
          </a-image>
        </>
      }
      {/* 로봇제어계측 동아리 */}
      {category === "mechanic" &&
        <>
          <a-image src={highrowbanner}
            position={`-5.4 2.6 ${-0.4 - (15 * index)}`}
            height="0.7px"
            width="4.8px"
            rotation="0 90 0"
            distance-culling="maxDistance: 50"
          >
          </a-image>
          <a-image src={highrowbanner2}
            position={`-5.4 2.6 ${4.45 - (15 * index)}`}
            height="0.7px"
            width="4.8px"
            rotation="0 90 0"
            distance-culling="maxDistance: 50"
          >
          </a-image>
          {/* 로봇 동아리 포스터 */}
          <a-image src={highrowposter}
            position={`-5 1 ${-2 - (15 * index)}`}
            width="0.84"
            height="1.2"
            rotation="-15 90 0"
            distance-culling="maxDistance: 20"
          >
          </a-image>
          {/*로봇팔*/}
          <a-entity gltf-model={`url(${mechanic_arm})`}
            position={`-9.5 1 ${-0.5 - (15 * index)}`}
            scale="0.3 0.3 0.3"
            rotation="0 -90 0"
            distance-culling="maxDistance: 20"
          ></a-entity>
          {/*드론*/}
          <a-entity gltf-model={`url(${workshop})`}
            position={`-8.5 1 ${-0.5 - (15 * index)}`}
            scale="0.2 0.2 0.2"
            rotation="0 -0 0"
            distance-culling="maxDistance: 20"
          ></a-entity>
          {/*드론2*/}
          <a-entity gltf-model={`url(${drone2})`}
            position={`-8.6 1.2 ${1 - (15 * index)}`}
            scale="0.005 0.005 0.005"
            rotation="0 -90 0"
            distance-culling="maxDistance: 20"
          ></a-entity>

          <a-entity gltf-model={`url(${tool_box})`}
            position={`-7.3 -1.6 ${-4.8 - (15 * index)}`}
            scale="0.7 0.7 0.7"
            distance-culling="maxDistance: 20"
          ></a-entity>
          <a-entity gltf-model={`url(${controller})`}
            scale= "0.08 0.08 0.08"
            rotation= "0 65 0"
            position={`-8.3 1.15 -13.8`}
            distance-culling="maxDistance: 20"
          ></a-entity>
          <a-image class="clickable" src={applicationForm}
            position={`-8.8 1 ${4.5 - (15 * index)}`}
            width="0.84"
            height="1.2"
            rotation="-90 90 0"
            link-to="url: /cbDescription"
            distance-culling="maxDistance: 20"
          >
          </a-image>
        </>
      }
      {/* 술동아리 */}
      {category === "alcohol" &&
        <>
          <a-image src={alcoholbanner}
            position={`-5.4 2.6 ${-0.4 - (15 * index)}`}
            height="0.7px"
            width="4.8px"
            rotation="0 90 0"
            distance-culling="maxDistance: 50"
          >
          </a-image>
          <a-image src={alcoholbanner2}
            position={`-5.4 2.6 ${4.45 - (15 * index)}`}
            height="0.7px"
            width="4.8px"
            rotation="0 90 0"
            distance-culling="maxDistance: 50"
          >
          </a-image>
          {/* 술 동아리 포스터 */}
          <a-image src={alcoholposter}
            position={`-5 1 ${-2 - (15 * index)}`}
            width="0.84"
            height="1.2"
            rotation="-15 90 0"
            distance-culling="maxDistance: 20"
          ></a-image>
          {/* 술테이블 */}
          {/* <a-entity gltf-model={`url(${alcohol_set})`}
            position={`-5 1 ${0.3 - (15 * index)}`}
            scale="0.015 0.015 0.015"
            rotation="0 -90 0"
            distance-culling="maxDistance: 20"
          ></a-entity> */}
          <a-entity gltf-model={`url(${table})`}
            position={`-5 0.1 ${0.3 - (15 * index)}`}
            scale="0.3 0.3 0.3"
            rotation="0 -90 0"
            distance-culling="maxDistance: 20"
          ></a-entity>
          <a-entity gltf-model={`url(${bottles})`}
            position={`-5 1.1 ${0.3 - (15 * index)}`}
            scale="0.008 0.008 0.008"
            rotation="0 -90 0"
            distance-culling="maxDistance: 20"
          ></a-entity>

          {/* 와인 */}
          <a-entity gltf-model={`url(${wine})`}
            position={`-8.4 1 ${0 - (15 * index)}`}
            scale="0.03 0.03 0.03"
            rotation="0 90 0"
            distance-culling="maxDistance: 20"
          ></a-entity>
          {/* 오크통 */}
          <a-entity gltf-model={`url(${mini_alcohol_bar})`}
            position={`-8.5 1.05 ${-1 - (15 * index)}`}
            scale="0.6 0.6 0.6"
            rotation="0 90 0"
            distance-culling="maxDistance: 20"
          ></a-entity>
          {/* 자격증 */}
          <a-entity gltf-model={`url(${barrel})`}
            position={`-9 0.9 ${0 - (15 * index)}`}
            scale="0.3 0.3 0.3"
            rotation="-0 90 0"
            distance-culling="maxDistance: 20"
          ></a-entity>
          <a-image class="clickable" src={applicationForm}
            position={`-8.8 1 ${4.5 - (15 * index)}`}
            width="0.84"
            height="1.2"
            rotation="-90 90 0"
            link-to="url: /cbDescription"
            distance-culling="maxDistance: 20"
          >
          </a-image>
        </>
      }
      {/* 주식동아리 */}
      {category === "stock" &&
        <>
          <a-image src={stockbanner}
            position={`-5.4 2.6 ${-0.4 - (15 * index)}`}
            height="0.7px"
            width="4.8px"
            rotation="0 90 0"
            distance-culling="maxDistance: 50"
          >
          </a-image>
          <a-image src={stockbanner2}
            position={`-5.4 2.6 ${4.45 - (15 * index)}`}
            height="0.7px"
            width="4.8px"
            rotation="0 90 0"
            distance-culling="maxDistance: 50"
          >
          </a-image>
          {/* 주식 동아리 포스터 */}
          <a-image src={stockposter}
            position={`-5 1 ${-2 - (15 * index)}`}
            width="0.84"
            height="1.2"
            rotation="-15 90 0"
            distance-culling="maxDistance: 20"
          ></a-image>
          {/* 차트 */}
          <a-entity gltf-model={`url(${chart})`}
            position={`-9.3 1.7 ${-0.5 - (15 * index)}`}
            rotation="0 90 0"
            scale="1.8 1.45 1.5"
            distance-culling="maxDistance: 20"
          ></a-entity>
          {/* 서류박스 */}
          {/* <a-entity gltf-model={`url(${boxes})`}
            position={`-5 0 ${0.3 - (15 * index)}`}
            rotation="0 -90 0"
            scale="1.3 1.2 1.2"
            distance-culling="maxDistance: 20"
          ></a-entity> */}
          <a-entity gltf-model={`url(${boxes2})`}
            position={`-5 0.5 ${0.3 - (15 * index)}`}
            rotation="0 0 0"
            scale="1.3 1.2 1.2"
            distance-culling="maxDistance: 20"
          ></a-entity>
          {/* 서류 */}
          {/* <a-entity gltf-model={`url(${file})`}
            position={`-8.4 1 ${0 - (15 * index)}`}
            scale="0.3 0.3 0.3"
            rotation="0 90 0"
            distance-culling="maxDistance: 20"
          ></a-entity> */}
          <a-entity gltf-model={`url(${newspaper})`}
            position={`-8.6 1 ${0 - (14.7 * index)}`}
            scale="0.04 0.04 0.04"
            rotation="0 90 0"
            distance-culling="maxDistance: 20"
          ></a-entity>
          <a-image class="clickable" src={applicationForm}
            position={`-8.8 1 ${4.5 - (15 * index)}`}
            width="0.84"
            height="1.2"
            rotation="-90 90 0"
            link-to="url: /cbDescription"
            distance-culling="maxDistance: 20"
          >
          </a-image>
        </>
      }

      {/* 사람들 */}
      {category === "people" &&
        <>
          {/* <a-entity gltf-model={`url(${soccerman})`}
            position={`-5.5 0 0 `}
            rotation="0 90 0"
            distance-culling="maxDistance: 20"
          ></a-entity> */}
          <a-entity gltf-model={`url(${soccergirl})`}
            position={`-4.4 0 0 `}
            rotation="0 -90 0"
            distance-culling="maxDistance: 20"
          ></a-entity>
          <a-entity gltf-model={`url(${korean})`}
            position={`-3 0.05 -18 `}
            rotation="0 20 0"
            scale="0.7 0.7 0.7"
            distance-culling="maxDistance: 20"
          ></a-entity>
          <a-entity gltf-model={`url(${korean2})`}
            position={`-7 0.05 -10 `}
            rotation="0 20 0"
            scale="0.7 0.7 0.7"
            distance-culling="maxDistance: 20"
          ></a-entity>
          {/* <a-entity gltf-model={`url(${korean3})`}
            position={`-5 0.05 -12 `}
            rotation="0 -90 0"
            scale="0.7 0.7 0.7"
            distance-culling="maxDistance: 20"
          ></a-entity> */}
          <a-entity gltf-model={`url(${korean4})`}
            position={`-4.5 0.05 -11 `}
            rotation="0 -60 0"
            scale="1 1 1"
            distance-culling="maxDistance: 20"
          ></a-entity>
          <a-entity gltf-model={`url(${korean5})`}
            position={`-5.9 0.05 -29.7 `}
            rotation="0 90 0"
            scale="0.7 0.7 0.7"
            distance-culling="maxDistance: 20"
          ></a-entity>
          <a-entity gltf-model={person1}
            position="-6.5 0.1 -61"
            scale="0.02 0.02 0.02"
            rotation="0 -135 0"
            distance-culling="maxDistance: 20"
          >
          </a-entity>
          <a-entity gltf-model={person2}
            position="4 0.1 -8.5"
            scale="0.018 0.018 0.018"
            rotation="0 85 0"
            distance-culling="maxDistance: 20"
          >
          </a-entity>
          <a-entity gltf-model={person3}
            position="3 0.1 -40"
            scale="1 1 1"
            rotation="0 90 0"
            distance-culling="maxDistance: 20"
          >
          </a-entity>
          <a-entity gltf-model={person4}
            position="-4 0 -47"
            scale="1 1 1"
            rotation="0 -90 0"
            distance-culling="maxDistance: 20"
          >
          </a-entity>
          <a-entity gltf-model={person5}
            position="-6 0.2 -45"
            scale="0.018 0.018 0.018"
            rotation="0 -90 0"
            distance-culling="maxDistance: 20"
          >
          </a-entity>
          <a-entity gltf-model={person6}
            position="5 0.1a 0"
            scale="0.02 0.02 0.02"
            rotation="-0 90 0"
            distance-culling="maxDistance: 20"
          >
          </a-entity>
          <a-entity gltf-model={person7}
            position="7 0 -26.5"
            scale="1 1 1"
            rotation="0 -90 0"
            distance-culling="maxDistance: 20"
          >
          </a-entity>
          <a-entity gltf-model={person8}
            position="5 0.2 -60"
            scale="0.01 0.01 0.01"
            rotation="-15 90 0"
            distance-culling="maxDistance: 20"
          >
          </a-entity>
        </>
      }
    </>
  )
}