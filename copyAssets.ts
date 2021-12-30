import * as shell from "shelljs";

// Copy all the view templates
shell.cp( "-Rf", "src/views", "dist/" );
