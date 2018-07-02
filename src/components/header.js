import React from 'react'
import { Link } from 'gatsby'
import { Grid, Icon } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

const Header = ({ siteTitle }) => (
  <Grid columns="equal">
    <Grid.Row>
      <Grid.Column>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </Grid.Column>
      <Grid.Column>
        <Icon name="bars" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Header
