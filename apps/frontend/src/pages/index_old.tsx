/* eslint-disable @next/next/no-img-element */
import { useQuery } from '@tanstack/react-query';
import Pagination from '@mui/material/Pagination';

import randomUsers from '../constants/randomUsers';
// import { usePageStore } from '../lib/contexts/page';
import RandomUsersType from '../interfaces/randomUsers';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from '../components/Layout';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import usePagination from '@mui/material/usePagination';
import { ReactNode, useRef, useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import clsx from 'clsx';
import Link from 'next/link';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRouter } from 'next/router';
import useAutocomplete from '@mui/material/useAutocomplete';
import Image from 'next/image';

export default function Home() {
  // const page = usePageStore((state) => state.page);
  const page = 1;
  const { isLoading, error, data } = useQuery<RandomUsersType>({
    queryKey: ['searchUsers', page],
    queryFn: () =>
      randomUsers.get('', { params: { page: page } }).then((res) => res.data),
    keepPreviousData: true,
  });

  if (isLoading) return <div>Carregando...</div>;

  if (error) return <div>error</div>;

  return (
    <Layout>
      <main>
        <Box className="bg-white pb-12 pt-16">
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Lista de usuários
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              className="pt-8"
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container className="py-16" maxWidth="lg">
          <Grid container spacing={4}>
            {data.results.map((card) => (
              <Grid item key={card.login.uuid} xs={12} sm={6} md={4} lg={3}>
                <Card className="flex h-full flex-col">
                  <CardMedia
                    component="img"
                    className="h-40 sm:h-36"
                    image={card.picture.large}
                    alt={`${card.name.first} photo`}
                  />
                  <CardContent className="grow">
                    <Typography gutterBottom variant="h6" component="h2">
                      {`${card.name.first} ${card.name.last}`}
                      {', '}
                      {card.dob.age}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.login.username}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="break-all"
                    >
                      {card.email}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </Layout>
  );
}
