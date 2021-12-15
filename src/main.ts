import { Company } from "./company";
import Container from "./di";

Container.register(Company);

const company = Container.get<Company>(Company);
console.log(company.getMeSomething());
