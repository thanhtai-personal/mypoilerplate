import React, { useEffect, useState } from 'react'
import { CardMedia, Card, CardContent, Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { HoverTextAnimation, SelectedTextStyled } from 'root/constants/commonStyled'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

interface MapViewProps {
  data: any
}

const loremText = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
, by injected humour, or randomised words which don't look even slightly believable
. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
  It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures
, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition
, injected humour, or non-characteristic words etc.`

interface ImageData {
  name: string,
  link: string,
  minTime: number,
  maxTime: number,
  time: string,
  content: string,
  title: string,
  imageTitle: string
}

const contentBackGround = 'white'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: contentBackGround
    },
    historycontent: {
      display: 'flex',
      float: 'left',
      backgroundColor: contentBackGround,
      minHeight: '823px'
    },
    mapImage: {
      display: 'flex',
      float: 'right',
      backgroundColor: contentBackGround
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
      width: 'calc(97vw - 520px)',
      fontSize: '12px'
    },
    cover: {
      width: '500px',
      height: '823px',
      boxShadow: 'inset 9px 9px 2px 0px'
    },
    centerText: {
      textAlign: 'center'
    },
    contentText: {
      paddingTop: '20px',
      cursor: 'text'
    }
  }),
);

const replaceBreakLine = (string: string) => {
  const newString = string.replace(/\n/g, '<br />')
  const listStrings = newString.split('<br />')
  listStrings.forEach((str) => {

  })
  return (
    <span>
      {listStrings.map(str => {
        return (<>{str}<br /></>)
      })}
    </span>
  )
}

const MapView = (props: MapViewProps) => {
  const { data } = props
  const [imagesList, setImageList] = useState<any[]>([])
  useEffect(() => {
    let images: any[] = []
    Object.keys(data).forEach((key) => {
      let _maps = data[key].maps || {}
      Object.keys(_maps).forEach((key2) => {
        if (_maps[key2].link) {
          images.push(_maps[key2])
        }
      });
    })
    setImageList(images)
  }, [data])
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {imagesList.map((image: ImageData) => (
        <>
          <Card className={classes.historycontent}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography className={classes.centerText} component="h5" variant="h5">
                  <HoverTextAnimation><span className='content'>{image.title || image.time}</span></HoverTextAnimation>
                </Typography>
                <Typography className={classes.contentText} variant="subtitle1" color="textSecondary">
                  <SelectedTextStyled>{replaceBreakLine(image.content || loremText)}</SelectedTextStyled>
                </Typography>
              </CardContent>
            </div>
          </Card>
          <TransformWrapper>
            <TransformComponent>
              <Card className={classes.mapImage}>
                <CardMedia
                  className={classes.cover}
                  image={image.link}
                  title={image.imageTitle}
                />
              </Card>
            </TransformComponent>
          </TransformWrapper>

        </>
      ))}
    </div>
  )
}

export default MapView