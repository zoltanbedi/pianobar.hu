import React from 'react'
import { Link } from 'gatsby'
import { Grid, Icon } from 'semantic-ui-react'

const Header = ({ siteTitle }) => (
  <Grid columns="equal">
    <Grid.Row>
      <Grid.Column>
        <h1 style={{ margin: 0 }}>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </Grid.Column>
      <Grid.Column textAlign='right' verticalAlign='middle'>
        <Icon name="bars" size='big' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Header
