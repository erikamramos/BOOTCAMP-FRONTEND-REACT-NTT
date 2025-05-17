import { render, screen } from '@testing-library/react';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/molecules';

describe('Table Components', () => {
  it('should render Table with correct class', () => {
    render(
      <Table>
        <caption>Test Caption</caption>
      </Table>,
    );
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    expect(table).toHaveClass('table');
  });

  it('should render TableHeader with correct class', () => {
    render(
      <table>
        <TableHeader>
          <TableRow>
            <TableHead>Header 1</TableHead>
          </TableRow>
        </TableHeader>
      </table>,
    );
    const header = screen.getByRole('rowgroup');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('table__header');
  });

  it('should render TableBody correctly', () => {
    render(
      <table>
        <TableBody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
          </TableRow>
        </TableBody>
      </table>,
    );
    const body = screen.getByRole('rowgroup');
    expect(body).toBeInTheDocument();
  });

  it('should render TableFooter with correct class', () => {
    render(
      <table>
        <TableFooter>
          <TableRow>
            <TableCell>Footer 1</TableCell>
          </TableRow>
        </TableFooter>
      </table>,
    );
    const footer = screen.getByRole('rowgroup');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('table__footer');
  });

  it('should render TableRow with correct class', () => {
    render(
      <table>
        <TableBody>
          <TableRow>
            <TableCell>Row 1</TableCell>
          </TableRow>
        </TableBody>
      </table>,
    );
    const row = screen.getByRole('row');
    expect(row).toBeInTheDocument();
    expect(row).toHaveClass('table__row');
  });

  it('should render TableHead with correct class', () => {
    render(
      <table>
        <TableHeader>
          <TableRow>
            <TableHead>Header Cell</TableHead>
          </TableRow>
        </TableHeader>
      </table>,
    );
    const headerCell = screen.getByRole('columnheader');
    expect(headerCell).toBeInTheDocument();
    expect(headerCell).toHaveClass('table__head');
  });

  it('should render TableCell with correct class', () => {
    render(
      <table>
        <TableBody>
          <TableRow>
            <TableCell>Body Cell</TableCell>
          </TableRow>
        </TableBody>
      </table>,
    );
    const cell = screen.getByRole('cell');
    expect(cell).toBeInTheDocument();
    expect(cell).toHaveClass('table__cell');
  });
});
