import React from "react";
import { connect } from "react-redux";
import { getcomptes, getCompteById } from "../../actions/projectActions";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
class EspaceClient extends React.Component {
  componentDidMount() {
    this.props.getcomptes();
  }
  constructor() {
    super();
    this.onClick = this.ClickDetail.bind(this);
    this.state = {
      showModal: false
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  ClickDetail = e => {
    e.preventDefault();
    console.log("COMPTE", e.target.value);
    this.props.getCompteById(e.target.value, this.props.history);
    const compte = this.props.compte.compte;
  };
  open = e => {
    this.setState({ showModal: true });
    //this.props.getDemandeById(e.target.value, this.props.history);
  };

  close() {
    this.setState({ showModal: false });
  }
  render() {
    const { comptes } = this.props.compte;
    const { compte } = this.props.compte;
    return (
      <html class="no-js" lang="">
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <title>OB-EspaceClient</title>
          <meta name="description" content="Ela Admin - HTML5 Admin Template" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="apple-touch-icon" href="https://i.imgur.com/QRAUqs9.png" />
          <link rel="shortcut icon" href="https://i.imgur.com/QRAUqs9.png" />

          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800"
            rel="stylesheet"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.0/css/flag-icon.min.css"
          />
          <link rel="stylesheet" href="assets/css/cs-skin-elastic.css" />
          <link rel="stylesheet" href="assets/css/style.css" />
        </head>

        <body>
          <aside id="left-panel" class="left-panel">
            <nav class="navbar navbar-expand-sm navbar-default">
              <div id="main-menu" class="main-menu collapse navbar-collapse">
                <ul class="nav navbar-nav">
                  <li class="active">
                    <br />
                    <a href="index.html">
                      <i class="menu-icon fa fa-laptop"></i>Tableau de Bord{" "}
                    </a>
                    <br />
                    <br />
                  </li>

                  <li class="menu-title">Gérer ma Contrat</li>
                  <li>
                    <a href="widgets.html">
                      {" "}
                      <i class="menu-icon fa fa-list-ul"></i>Mes Comptes{" "}
                    </a>
                  </li>
                  <li>
                    <a href="widgets.html">
                      {" "}
                      <i class="menu-icon fa fa-tasks"></i>Mes Opérations{" "}
                    </a>
                  </li>
                  <li>
                    <a href="widgets.html">
                      {" "}
                      <i class="menu-icon ti-id-badge"></i>Mes Cartes Bancaires{" "}
                    </a>
                  </li>
                  <li class="menu-title">Gérer mon Compte</li>
                  <li>
                    <a href="widgets.html">
                      {" "}
                      <i class="menu-icon ti-user"></i>Mes Informations{" "}
                    </a>
                  </li>
                  <li>
                    <a href="widgets.html">
                      {" "}
                      <i class="menu-icon fa fa-pencil-square-o"></i>Modifier
                      mon Compte{" "}
                    </a>
                  </li>
                  <li class="menu-title">Déconnection</li>
                  <li>
                    <a href="widgets.html">
                      {" "}
                      <i class="menu-icon fa fa-sign-out"></i>Se Déconnecter{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>
          <div id="right-panel" class="right-panel">
            <header id="header" class="header">
              <div class="top-left">
                <div class="navbar-header">
                  <a class="navbar-brand" href="./">
                    <img
                      src="images/LOGO3.png"
                      alt="Logo"
                      height="55px"
                      width="190px"
                    />
                  </a>
                  <a class="navbar-brand hidden" href="./">
                    <img src="images/LOGO3.png" alt="Logo" />
                  </a>
                </div>
              </div>
              <div class="top-right">
                <div class="header-menu">
                  <div class="user-area dropdown float-right">
                    <a
                      href="#"
                      class="dropdown-toggle active"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        class="user-avatar rounded-circle"
                        src="images/user.jpg"
                        width="100px"
                        height="35px"
                        alt="User Avatar"
                      />
                    </a>

                    <div class="user-menu dropdown-menu">
                      <a class="nav-link" href="#">
                        <i class="fa fa- user"></i>My Profile
                      </a>

                      <a class="nav-link" href="#">
                        <i class="fa fa-power -off"></i>Logout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div class="breadcrumbs">
              <div class="breadcrumbs-inner">
                <div class="row m-0">
                  <div class="col-sm-4">
                    <div class="page-header float-left">
                      <div class="page-title">
                        <h1>Accueil</h1>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-8">
                    <div class="page-header float-right">
                      <div class="page-title">
                        <ol class="breadcrumb text-right">
                          <li>
                            <a href="#">Accueil</a>
                          </li>
                          <li>
                            <a href="#">Mes Comptes</a>
                          </li>
                          <li class="active">Liste</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content">
              <div class="animated fadeIn">
                <div class="row">
                  <div class="col-md-12">
                    <div class="card">
                      <div class="card-body">
                        <table
                          id="bootstrap-data-table"
                          class="table table-striped table-bordered"
                        >
                          <thead>
                            <tr>
                              <th>Numéro de Compte</th>
                              <th>Date de Création</th>
                              <th>Solde</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {comptes.map(compte => (
                              <tr key={compte.idCompte}>
                                <td>{compte.idCompte}</td>
                                <td>{compte.dateCreation}</td>
                                <td>{compte.solde}</td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-primary mb-1"
                                    onClick={this.open}
                                  >
                                    Small
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="modal fade"
            id="smallmodal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="smallmodalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-sm" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="smallmodalLabel">
                    Small Modal
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>
                    There are three species of zebras: the plains zebra, the
                    mountain zebra and the Grévy's zebra. The plains zebra and
                    the mountain zebra belong to the subgenus Hippotigris, but
                    Grévy's zebra is the sole species of subgenus Dolichohippus.
                    The latter resembles an ass, to which it is closely related,
                    while the former two are more horse-like. All three belong
                    to the genus Equus, along with other living equids.
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" class="btn btn-primary">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Modal
              className="modal-container"
              show={this.state.showModal}
              onHide={this.close}
              animation={true}
              bsSize="small"
            >
              <div class="modal-header">
                <h5 class="modal-title" id="smallmodalLabel">
                  Confirm Abandon
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <Modal.Body>
                <p>Are you sure to abandon this Request?</p>
              </Modal.Body>

              <Modal.Footer>
                <button class="btn btn-danger">Yes</button>
                <button onClick={this.close} class="btn btn-secondary">
                  No
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        </body>
        <script
          src="assets/js/vendor/jquery-2.1.4.min.js"
          type="530741662907ef2fae1e07b0-text/javascript"
        ></script>
        <script
          src="assets/js/popper.min.js"
          type="530741662907ef2fae1e07b0-text/javascript"
        ></script>
        <script
          src="assets/js/plugins.js"
          type="530741662907ef2fae1e07b0-text/javascript"
        ></script>
        <script
          src="assets/js/main.js"
          type="530741662907ef2fae1e07b0-text/javascript"
        ></script>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"
          type="530741662907ef2fae1e07b0-text/javascript"
        ></script>
        <script
          src="https://ajax.cloudflare.com/cdn-cgi/scripts/7089c43e/cloudflare-static/rocket-loader.min.js"
          data-cf-settings="530741662907ef2fae1e07b0-|49"
          defer=""
        ></script>
        <script src="https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.4/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/jquery-match-height@0.7.2/dist/jquery.matchHeight.min.js"></script>
        <script src="assets/js/main.js"></script>
      </html>
    );
  }
}
EspaceClient.propTypes = {
  compte: PropTypes.object.isRequired,
  getcomptes: PropTypes.func.isRequired,
  getCompteById: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  compte: state.compte
});
export default connect(mapStateToProps, { getcomptes, getCompteById })(
  EspaceClient
);
