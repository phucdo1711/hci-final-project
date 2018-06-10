import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import classes from './ProjectPage.scss'
import Button from 'material-ui/Button/Button'

const Project = ({ params, projeca, viewProject }) => (
  <div className={classes.container}>
    <Card className={classes.card}>
      <CardContent>
        <Typography component="H3">{projeca.name}</Typography>
        <Typography component="div">
          <pre>{JSON.stringify(projeca, null, 2)}</pre>
        </Typography>
      </CardContent>
    </Card>
  </div>
)

Project.propTypes = {
  projeca: PropTypes.object,
  params: PropTypes.object.isRequired
}

export default Project
