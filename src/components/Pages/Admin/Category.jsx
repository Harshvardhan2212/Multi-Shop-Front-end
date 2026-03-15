import { Column } from "primereact/column";
import Skeleton from "react-loading-skeleton";
import { DataTable } from "primereact/datatable";
import { useAdminGetCategoryDataQuery } from "../../../Redux/Slices/CategoryApis"

const Category = () => {
  // const {
  //   data,
  //   error,
  //   isLoading,
  //   isFetching,
  //   isSuccess,
  //   isError,
  //   refetch
  // } = useAdminGetCategoryDataQuery();

  const isLoading = true;
  const headerMap = [
    'name',
    'description',
    'category-slug',
    'sub-category'
  ];
  const heeaderMap = {
    'name': 'Name',
    'description': 'Description',
    'category_slug': 'Category-slug',
    'Sub_category': 'Sub-category',
    'image': 'Banner'
  };

  const skeletonRows = Array.from({ length: 5 });

  return (
    <>
      <DataTable
        value={isLoading ? skeletonRows : ""}
        tableStyle={{ minWidth: "60rem" }}
      >
        {headerMap.map((item) => (
          <Column
            key={item}
            field={item}
            header={item}
            sortable
            body={isLoading ? () => <Skeleton width="100%" height="1.5rem" /> : undefined}
          />
        ))}
      </DataTable>

    </>
  )
}

export default Category
