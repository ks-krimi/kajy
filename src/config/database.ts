import {DataSourceOptions} from 'typeorm';

import Achat from '../entities/achat';
import Category from '../entities/category';
import Consomation from '../entities/consomation';
import Convertisseur from '../entities/convertisseur';
import Depense from '../entities/depense';
import Notification from '../entities/notification';
import Plafond from '../entities/plafond';
import Portefeuille from '../entities/portefeuille';
import Provision from '../entities/provision';
import Revenu from '../entities/revenu';
import Unite from '../entities/unite';
import Utilisateur from '../entities/utilisateur';

const options: DataSourceOptions = {
  type: 'react-native',
  database: 'kajy.db',
  location: 'default',
  logging: ['error', 'query', 'schema'],
  entities: [
    Achat,
    Category,
    Consomation,
    Convertisseur,
    Depense,
    Notification,
    Plafond,
    Portefeuille,
    Provision,
    Revenu,
    Unite,
    Utilisateur,
  ],
};

export default options;
