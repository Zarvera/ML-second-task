import '../../vendors/js/jquery.simplePagination';
import '../../vendors/js/simplePagination.css';

$('.demo-pag').pagination({
  pages: 15,
  displayedPages: 3,
  currentPage: 1,
  edges: 1,
  prevText: "arrow_back",
  nextText: "arrow_forward"
});
  
