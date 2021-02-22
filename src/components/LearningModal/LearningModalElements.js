.grid-container {
    display: grid;
    grid-template-columns: 2fr 0.1fr;
    grid-template-rows: 0.1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      ". x"
      "academic ."
      "Courses .";
  }
  
  .academic { grid-area: academic; }
  
  .Courses { grid-area: Courses; }

  .x { grid-area: x; }
  