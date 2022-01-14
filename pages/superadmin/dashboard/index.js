import Head from "next/head";
import MaterialTable from "material-table";
import Link from "next/link";
import { Container } from "@mui/material";
import styles from "../../../styles/dashboard/Index.module.css";
import { useStyles } from "../../../styles/dashboard/Index.style";
import { TopBar } from "../../../src/components/navigation/TopBar";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ClassIcon from '@mui/icons-material/Class';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


export default function DashboardSuperAdmin() {
  const classes = useStyles();

  return (
    // <div className={styles.container}>
    <div className={classes.root}>
      <Head>
        <title>Dashboard CalFit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar label="Dashboard" />

      <main className={classes.main}>
        <Container className={classes.menuBox}>
          {/* <h1>Dashboard</h1> */}
          <div className={classes.selectedMenu}>
            <DashboardIcon className={classes.menuIcon} />
            <Link href="/superadmin/dashboard" passHref>
              <div>Dashboard</div>
            </Link>
          </div>
          <div className={classes.menu}>
            <FitnessCenterIcon className={classes.menuIcon} />
            <Link href="/superadmin/clubs" passHref>
              <div>Clubs</div>
            </Link>
          </div>
          <div className={classes.menu}>
            <ClassIcon className={classes.menuIcon} />
            <Link href="/superadmin/classes" passHref>
              <div>Classes</div>
            </Link>
          </div>
          <div className={classes.menu}>
            <NewspaperIcon className={classes.menuIcon} />
            <Link href="/superadmin/newsletters" passHref>
              <div>Newsletters</div>
            </Link>
          </div>
          <div className={classes.menu}>
            <OndemandVideoIcon className={classes.menuIcon} />
            <Link href="/superadmin/videos" passHref>
              <div>Videos</div>
            </Link>
          </div>
          <div className={classes.menu}>
            <SupervisorAccountIcon className={classes.menuIcon} />
            <Link href="/superadmin/admins" passHref>
              <div>Admins</div>
            </Link>
          </div>
          <div className={classes.menu}>
            <ManageAccountsIcon className={classes.menuIcon} />
            <Link href="/superadmin/profile" passHref>
              <div>Profile Settings</div>
            </Link>
          </div>
        </Container>
        <MaterialTable
          title="Positioning Actions Column Preview"
          columns={[
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
              title: 'Birth Place',
              field: 'birthCity',
              lookup: { 34: 'İstanbul', 63: 'Şanliurfa' },
            },
          ]}
          data={[
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
          ]}
          actions={[
            {
              icon: 'save',
              tooltip: 'Save User',
              onClick: (event, rowData) => alert("You saved " + rowData.name)
            },
            rowData => ({
              icon: 'delete',
              tooltip: 'Delete User',
              onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
              disabled: rowData.birthYear < 2000
            })
          ]}
          options={{
            actionsColumnIndex: -1
          }}
        />

      </main>
    </div>
  );
}
